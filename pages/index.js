import axios from "axios";
import config from "../config.json";
import Head from "next/head";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas)

class UserPage extends React.Component {
  render() {
    let userData = (
      <div
        className="container"
        style={{
          fontFamily: config.user.font,
          overflow: 'auto',
          borderRadius: config.user.corners,
        }}
      >
        <Head>
          <title>Home | {config.user.username}</title>
        </Head>
        <div className="main background">
          <div className="nav flex">
            <div>
            <img className="logo" style={{height: config.avatar.size }} src={config.user.logo} />
            </div>
          </div>
          <div className="herocont flex">
            <div>
              <h1 className="title" style={{ color: config.user.color, fontSize: config.web.titleSize }}>{config.web.title}</h1>
              <p className="subtitle" style={{color: config.user.colorSecondary, fontSize: config.web.subtitleSize}}>{config.web.subtitle}</p>
              <p>{config.web.desc}</p>
              <a href={config.social.dribbble} target="_blank" className="mainbutton">
                <FontAwesomeIcon icon={["fab", "dribbble"]} />
              </a>
              <a href={config.social.figma} target="_blank" className="mainbutton">
                <FontAwesomeIcon icon={["fab", "figma"]} />
              </a>
              <a href={config.social.github} target="_blank" className="mainbutton">
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
              <a href={config.social.twitter} target="_blank" className="mainbutton">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
              <a href={config.social.instagram} target="_blank" className="mainbutton">
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </a>
              <a href={config.social.facebook} target="_blank" className="mainbutton">
                <FontAwesomeIcon icon={["fab", "facebook"]} />
              </a>
              <a href={config.social.youtube} target="_blank" className="mainbutton">
                <FontAwesomeIcon icon={["fab", "youtube"]} />
              </a>
            </div>
            <div>
              <img className="avatar" src="avatar.png" style={{ maxWidth: config.avatar.size }}/>
            </div>
          </div>
        </div>
        <div className="main projects">
            <div className="flex">
              <div className="left-line">
              </div>
              <div>
              <h1 className="projh1">Projects</h1>
              </div>
            </div>
            <div>
            <a target="_blank" className="projbtn" href={config.social.coffee}
      style={{color: config.web.mainbutton.color, background: config.web.mainbutton.background 
      }}><FontAwesomeIcon icon={["fas", "mug-hot"]} /> support me</a>
            </div>
        </div>
        <div>
        <div className="project">
        <div className="flex-grid">
            {config.projects.map((project, index) => (
            <div className="col center card">
            <h1 className="projtitle" style={{color: project.color}}>{project.name}</h1>
            <p className="projdesc">{project.desc}</p>
            <a target="_blank" className="projbtn" href={project.url}
      style={{color: config.web.mainbutton.color, background: project.color 
      }}>{project.buttonTitle}</a>
            </div>
            ))}
        </div>
        </div>
        </div>
      </div>
    );

    if (config.currentScene === "game") {
      return <body style={{ background: "transparent !important"}}></body>;
    } else {
      return userData;
    }
  }
}

export default UserPage;
