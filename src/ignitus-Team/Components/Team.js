import React from "react";
import "../Styles/style.scss";

import { AVATARS, CONTRIBUTORS_DATA } from "./Data";
import { withErrorBoundary } from "../../ignitus-Internals";
import loader from "../../ignitus-Assets/Images/loader.gif";

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contributorsData: []
    };
  }

  componentDidMount() {
    this.props.getContributorsData();
  }

  render() {
    const { presets, isFetching } = this.props.contributorsData;

    if (isFetching) {
      return (
        <div className="container col-lg-6 col-md-4 col-sm-6 col-9 mx-auto">
          <div className="loader">
            <img src={loader} />
          </div>
        </div>
      );
    }

    const teamHTML = AVATARS.map(item => (
      <div
        key={item.title}
        className="col-6 col-sm-4 col-md-3 avatar-wrapper text-center p-3"
      >
        <div className="avatar bg-white p-3" id="team-avatar-card">
          <img
            className="rounded-circle mw-100 w-75"
            src={item.img}
            alt={`avatar ${item.name}`}
          />
          <div className="title-name mt-2">{item.title}</div>
          <div className="title-description">{item.description}</div>
        </div>
      </div>
    ));
    const contributorsHTML = presets.map(item => (
      <div
        key={item.id}
        className="col-3 col-sm-3 col-md-2 avatar-wrapper text-center p-2"
      >
        <div className="p-3">
          <img
            className="rounded-circle mw-100 w-75"
            src={item.avatar_url}
            alt={`avatar ${item.login}`}
          />
          <div className="title-name mt-2">{item.login}</div>
        </div>
      </div>
    ));

    return (
      <div>
        <div className="team-wrapper container my-5 py-5">
          <div className="row">
            <div className="col">
              <div className="title text-center mb-3">Our Team</div>
              <div className="Team">
                <div className="row team_row">{teamHTML}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="team-wrapper container my-5 py-5">
          <div className="row">
            <div className="col">
              <div className="title text-center mb-3">Our Contributors</div>
              <div className="studentsResearchers">
                This project was made possible by these contributors
              </div>
              <div className="Team">
                <div className="row team_row">{contributorsHTML}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withErrorBoundary(Team);
