import { Link, NavLink } from "react-router-dom";

export default function About() {

  return (
      <div className="page-content">
          <div className="text-content">
              <h1>About Me:</h1>
              <div>
                  <p> Hello there. </p>
                  <br />
                  <p>
                      My name is Matt Rosenfeld. I recently graduated from the University of
                      Maryland, College Park, with a B.S. in electrical engineering and a minor in
                      computer science. I am interested in a wide range of topics related to
                      computer engineering and software development. I hope to continue learning
                      about the enormous world of software development and engineering, having
                      future experiences narrow down my interests into potential career paths.
                  </p>
                  <br />
                  <p>
                      My other interests include music (I have a minor in saxophone performance from
                      UMD) and biking (trail riding and light mountain biking). If you have
                      questions about me, my work, or my other hobbies, my contact information can
                      be found on the <Link to="/Contact"> contact page</Link>.
                  </p>
              </div>
          </div>
          <img src="images/bioheadshot.jpg" alt="headshot_not_found" />
      </div>
  );
}

