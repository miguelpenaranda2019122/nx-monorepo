export interface WorkType {
    id: number,
    title: string,
    desc: string,
    check: boolean
  }

export const worksListInfo: WorkType[] = [
    {
        id: 1,
        title: "Personal Work No. 1",
        desc: "develop application 1",
        check: false
    },
    {
        id: 2,
        title: "Personal Work No. 2",
        desc: "develop application 2",
        check: false
    },
    {
        id: 3,
        title: "Personal Work No. 3",
        desc: "develop application 3",
        check: false
    },
    {
        id: 4,
        title: "Personal Work No. 4",
        desc: "develop application 4",
        check: true
    },
    {
        id: 5,
        title: "Personal Work No. 5",
        desc: "develop application 5",
        check: false
    }
]

