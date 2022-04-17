import React, { useEffect } from "react";
import blog1 from "../../images/blogs-images/blog1.jpg";
import blog2 from "../../images/blogs-images/blog2.png";
import blog3 from "../../images/blogs-images/blog3.png";
const Blogs = () => {
  useEffect(() => {
    document.title = "My Blogs";
    document.body.style.background = "#2b2f32";
  }, []);
  return (
    <div className="container">
      <h2 className="text-warning text-center my-5">My Blogs</h2>
      <div className="d-flex justify-content-between mb-5">
        <img src={blog1} alt="" />
        <div className="text-white w-50">
          <h3 className="text-warning">Difference between authorization and authentication</h3>
          <article className="mb-3">
            <span className="text-warning font-weight-bold">Authentication: </span>Authentication is the process of verifying your identity by confirming your credentials, such as your User Name/User ID and password. Using your credentials, the system determines whether you are who you claim you are. The system uses login passwords to verify the user's identity in both public and private networks. Authentication is normally done with a username and password, but it can also be done with factors of authentication, which are several methods to be authenticated.
          </article>
          <article className="mb-3">
            <span className="text-warning font-weight-bold">Authorization: </span>Authorization, on the other hand, occurs after the system successfully authenticates your identity, granting you complete access to resources such as information, files, databases, funds, places, and nearly anything else. Simply said, authorisation affects your capacity to access the system and the extent to which you can do so. After the system verifies your identity through successful authentication, you are granted access to the system's resources.
          </article>
        </div>
      </div>
      <div className="d-flex justify-content-between my-5">
        <div className="text-white w-50">
          <h3 className="text-warning">Why are you using firebase? What other options do you have to implement authentication?</h3>
          <article className="mb-3">
            <span className="text-warning font-weight-bold">Reason using firebase: </span>Connecting and using built-in third-party authentication providers, such as Google, Facebook, and Twitter, is a breeze with Firebase. Additionally, if someone wants to use a pre-built authentication UI, they can do so. All of them can help to save a lot of money on development because won't have to start from zero. Pricing for Firebase is also very flexible. Although there are pay-as-you-go options, if the app is still in its prime, you can start with a free subscription and enjoy the basic functions.
          </article>
          <article className="mb-3">
            <span className="text-warning font-weight-bold">Other Options to implement authentication: </span>
            <ul>
              <li>HTTP Basic Authentication</li>
              <li>API Key Authentication</li>
              <li>OAuth Authentication</li>
              <li>No Authentication</li>
            </ul>
          </article>
        </div>
        <img src={blog2} alt="" />
      </div>
      <div className="d-flex justify-content-between my-5">
        <img src={blog3} alt="" />
        <div className="text-white w-50">
          <h3 className="text-warning">What other services does firebase provide other than authentication?</h3>
          <article className="mb-3">
            <span className="text-warning font-weight-bold">Incredibly Built-In Analytics: </span>The analytics dashboard is one of the nicest tools that Firebase has to offer. It's completely free and can report on 500 different event kinds, each with 25 different properties.
          </article>
          <article className="mb-3">
            <span className="text-warning font-weight-bold">App Development Made Easy: </span>We can focus our time and effort on producing the best possible applications for our company thanks to Firebase. The internal and operational functions are quite reliable.
          </article>
          <article className="mb-3">
            <span className="text-warning font-weight-bold">Growth and User Engagement: </span>The ability to evolve and engage with users over time is one of the most crucial components of program development. Firebase provides a lot of built-in functionalities, so it's perfect for what we're doing. It is at the heart of what makes Firebase so great, as the platform leads to commercial apps.
          </article>
          <article className="mb-3">
            <span className="text-warning font-weight-bold">Increase Earnings: </span>We can monetize our app using AdMob's feature while still providing the greatest possible experience for our consumers. We can make app development well worth it by showing real-time advertising to millions of Google advertisers, choosing a format that matches our app, and working with over 40 leading ad networks utilizing AdMob Mediation.
          </article>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
