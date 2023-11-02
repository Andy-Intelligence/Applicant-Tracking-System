import MenuParagraph from './MenuParagraph'
const Sidebar = ({style}) => {
    return (
        <div  className="bg-white p-2 sider">
            <MenuParagraph pDetails = 'Candidates'  />
            <MenuParagraph pDetails = 'Interviews'  />
            <MenuParagraph pDetails = 'Talent board'  />
            <MenuParagraph pDetails = 'My Team'  />
            <MenuParagraph pDetails = 'Employed'  />
            <MenuParagraph pDetails = 'Help'  />
            <MenuParagraph pDetails = 'Settings'  />
        </div>
    );
}

export default Sidebar;
