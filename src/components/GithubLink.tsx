import GithubLogo from "../assets/github-logo.svg";

function GithubLink() {
  return (
    <a href="https://github.com/enrique-ramirez/ow2trivia/" rel="external">
      <img
        src={GithubLogo}
        alt="Github"
        className="fixed top-2 right-2 m-2 h-8 w-8"
      />
    </a>
  );
}

export { GithubLink };
