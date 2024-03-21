export type Tag = "Chores" | "Work" | "Grocery" | "Hobby" | "Other";
export type Difficulty = "Low" | "Medium" | "High";
export interface WorkType {
    id: number,
    title: string,
    desc: string,
    check: boolean,
    tag?: Tag;
    difficulty?: Difficulty
  }

export const worksListInfo: WorkType[] = [
    {
        id: 1,
        title: "Personal Project",
        desc: "Develop a monorepo with React Native applications to test his advantages.",
        check: false,
        tag: "Work",
        difficulty: "High"
    },
    {
        id: 2,
        title: "Buy new earphones",
        desc: "I need to buy new earphones at fnac or worten",
        check: false,
        tag: "Chores",
        difficulty: "Low"
    },
    {
        id: 3,
        title: "Print Photos",
        desc: "Photos needed to sell to a client",
        check: false,
        tag: "Chores",
        difficulty: "Low"
    },
    {
        id: 5,
        title: "Play GTA with friends at the night",
        desc: "Remember to connect on GTA at 20:30h",
        check: false,
        tag: "Hobby",
        difficulty: "Low"
    },
    {
        id: 6,
        title: "Presentation for client meeting",
        desc: "Create slides and gather necessary information for tomorrow's meeting.",
        check: false,
        tag: "Work",
        difficulty: "Medium"
    },
    {
        id: 7,
        title: "Fix leaking faucet in the bathroom",
        desc: "The faucet in the bathroom is leaking, needs to be fixed.",
        check: false,
        tag: "Chores",
        difficulty: "High"
    },
    {
        id: 8,
        title: "Organize closet",
        desc: "Closet is a mess, needs to be organized and decluttered.",
        check: false,
        tag: "Chores",
        difficulty: "Low"
    },
    {
        id: 9,
        title: "Dinner for family gathering",
        desc: "Cook a meal for the family gathering this evening.",
        check: false,
        tag: "Grocery",
        difficulty: "Medium"
    },
    {
        id: 10,
        title: "Practice guitar for upcoming performance",
        desc: "Need to practice guitar chords and songs for the upcoming performance.",
        check: false,
        tag: "Hobby",
        difficulty: "High"
    }
]

