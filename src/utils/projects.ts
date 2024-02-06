export interface Project {
  name: string;
  githubLink: string;
  techStack: string[];
  description: string;
  imagePaths?: string[];
}

export const projects: Project[] = [
  {
    name: "Varchess",
    githubLink: "http://github.com/vishnkr/varchess",
    techStack: ["Sveltekit", "Go", "Postgres"],
    description:
      "I developed Varchess to play custom chess variants whenever I got tired of playing regular chess. Also acts as a playground to test out absurd variant ideas.",
    imagePaths: ["src/assets/varchess1.png"],
  },
  {
    name: "Sandy",
    githubLink: "http://github.com/vishnkr/sandy",
    techStack: ["Javascript", "Rust"],
    description:
      "A cellular automaton sandbox inspired by sandspiel. Keep fans and ice packs handy for your CPU as it's an 'optimization masterpiece!'",
    imagePaths: ["src/assets/sandy.png"],
  },
  {
    name: "Ciow (Chip8 In One Weekend)",
    githubLink: "http://github.com/vishnkr/ciow",
    techStack: ["Go"],
    description: "Just a good old Chip8 Emulator",
    imagePaths: ["src/assets/ciow1.png", "src/assets/ciow2.png"],
  },
  {
    name: "Stonkfish",
    githubLink: "http://github.com/vishnkr/stonkfish",
    techStack: ["Rust", "WebAssembly"],
    description:
      "A Rust-based chess engine used to play chess variants in Varchess. It also includes a WebAssembly (WASM) compiled client-side validation library with custom game logic.",
  },
];
