import {useState} from "react";
import {useTheme} from "../../Context/Theme-Context";

const GithubChart = () => {
  const [githubUser, setGithubUser] = useState(null);
  const [gitInput, setGitInput] = useState("");
  const {themeObject} = useTheme();
  const handleGithubChart = (e) => {
    e.preventDefault();
    setGithubUser(() => gitInput);
    setGitInput("");
  };
  return (
    <div>
      <form onSubmit={handleGithubChart} className="github-form">
        <label style={{color: themeObject.text}} className="pr-2">
          Enter Github username:{" "}
          <input
            type="text"
            className="github-user-input"
            required
            autoFocus
            value={gitInput}
            onChange={(e) => setGitInput(e.target.value)}
          />
        </label>
        <button className="git-add-btn">Add</button>
      </form>
      <div>
        {githubUser?<img
          src={`http://ghchart.rshah.org/${githubUser}`}
          alt={githubUser}
          className="github-img"
        />:null}
      </div>
      
    </div>
  );
};

export {GithubChart};
