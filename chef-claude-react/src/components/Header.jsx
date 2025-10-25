import chefClaudeLogo from "/src/assets/chef-claude-icon.png";

export default function Header() {
  return (
    <>
      <header className="header">
        <img src={chefClaudeLogo} alt="" />
        <h1>Chef Claude</h1>
      </header>
    </>
  );
}
