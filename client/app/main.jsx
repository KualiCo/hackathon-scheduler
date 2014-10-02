/** @jsx React.DOM */
var React = window.React = require('react');
var Router = require('react-router')
var Route = Router.Route
var Routes = Router.Routes
var DefaultRoute = Router.DefaultRoute
var NotFoundRoute = Router.NotFoundRoute
var Link = Router.Link
var Redirect = Router.Redirect

var Hello = require('./requests/hello.jsx')
var RequestList = require('./requests/requests.jsx')
var RequestNew = require('./requests/requests-new.jsx')
var RequestMain = require('./requests/requests-main.jsx')

var routes = (
    <Routes>
        <Route name="hello" path="/hello" handler={Hello} />
        <Route name="requests" path="/requests" handler={RequestMain}>
          <Route name="new" path="/requests/new" handler={RequestNew}/>
          <DefaultRoute handler={RequestList}/>
        </Route>
        <Redirect path="/" to="/requests" />
    </Routes>
)

// module.exports = (
//   <Routes>
//     <Route name="index" path="/" handler={App}>
//       <Route name="courses" path="courses" handler={courseParent} >
//         <Route path=":courseId" handler={courseDetail}/>
//         <DefaultRoute handler={courseList}/>
//       </Route>
//       <Route name="proposals" path="proposals" handler={proposals}>
//         <Route name="role" path="role" handler={proposalChooseRole}/>
//         <Route name="faculty" path="faculty" handler={proposalFacultyDashboard}/>
//         <Route name="approver" path="approver" handler={proposalApproval}/>
//         <Route name="new" path="new" handler={newProposal}/>
//         <Route name="review" path="review/:proposalId" handler={proposalReview}/>
//         <Redirect path="/proposals" to="/proposals/role" handler={courseList}/>
//       </Route>
//       <Route name="profile" path="profile" handler={Profile}/>
//       <Redirect path="/" to="/courses" />
//     </Route>
//     <NotFoundRoute handler={notFound} />
//   </Routes>
// );

React.renderComponent(routes, document.body);
