import React from 'react';
import Link from 'next/link';
import styles from './Projects.module.css';

const Projects = () => {
    return (
        <div className={styles.container}>
            <h1>My Projects</h1>
            <ul className={styles.projectList}>
                <li>
                    <Link href="https://github.com/your-username/project-1">
                        <a>Project 1</a>
                    </Link>
                </li>
                <li>
                    <Link href="https://github.com/your-username/project-2">
                        <a>Project 2</a>
                    </Link>
                </li>
                {/* Add more projects here */}
            </ul>
        </div>
    );
};

export default Projects;