
import '../../pages/Home/TopNavigationBar/TopNavigationBar.css';
export const CHInscription= () => {
    const scrollToSection = () => {
      const section = document.getElementById("contactUsSection");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    return (
      <div>
        <button onClick={scrollToSection} className="scroll-button">
        {`S'inscrire`}
        </button>
      </div>
    );
}