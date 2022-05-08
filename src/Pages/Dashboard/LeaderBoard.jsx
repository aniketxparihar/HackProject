import {useTheme} from "../../Context/Theme-Context";

const LeaderBoard = () => {
  const {themeObject} = useTheme();
  return (
    <>
      <h2 className="board-title pl-8" style={{color: themeObject.text}}>
        Leaderboard
      </h2>
      <div className="board-head" style={{color: themeObject.text}}>
        <h3>Rank</h3>
        <h3>User</h3>
        <h3>Projects Completed</h3>
      </div>
      <div className="board-ctn" style={{backgroundColor: themeObject.primary}}>
        <div
          className="board-data"
          style={{backgroundColor: themeObject.secondary}}
        >
          <h4 style={{color: themeObject.text}}>1</h4>
          <div className="user-img-name">
            <img
              src="https://assetplay.netlify.app/static/media/jhon.8bcfe623.jpg"
              alt="user-name"
              className="board-user-img"
            />
            <h4 className="pl-2" style={{color: themeObject.text}}>
              Jhon Doe
            </h4>
          </div>
          <h4 style={{color: themeObject.text}}>3/4</h4>
        </div>
        {/* user 2 */}
        <div
          className="board-data"
          style={{backgroundColor: themeObject.secondary}}
        >
          <h4 style={{color: themeObject.text}}>2</h4>
          <div className="user-img-name">
            <img
              src="https://assetplay.netlify.app/static/media/jhon.8bcfe623.jpg"
              alt="user-name"
              className="board-user-img"
            />
            <h4 className="pl-2" style={{color: themeObject.text}}>
              Jhon Doe
            </h4>
          </div>
          <h4 style={{color: themeObject.text}}>3/4</h4>
        </div>
        {/* user 3 */}
        <div
          className="board-data"
          style={{backgroundColor: themeObject.secondary}}
        >
          <h4 style={{color: themeObject.text}}>3</h4>
          <div className="user-img-name">
            <img
              src="https://assetplay.netlify.app/static/media/jhon.8bcfe623.jpg"
              alt="user-name"
              className="board-user-img"
            />
            <h4 className="pl-2" style={{color: themeObject.text}}>
              Jhon Doe
            </h4>
          </div>
          <h4 style={{color: themeObject.text}}>3/4</h4>
        </div>
      </div>
    </>
  );
};

export {LeaderBoard};
