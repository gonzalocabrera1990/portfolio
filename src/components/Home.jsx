import { useState } from "react";

// COMPONENTS
import { DrawNavBar } from "./Drawnav";
import { Cover } from "./Cover";
import { NavBar } from "./Navbar";
import { About } from "./About";
import { Projects } from "./projects";
import { SkillList } from "./skills";
import { Contact } from "./Contact";

export function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="App">
            <DrawNavBar
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
            />

            <NavBar
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
            />

            <Cover />
            <About />
            <Projects />
            <SkillList />
            <Contact />
        </div>
    );
}