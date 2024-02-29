const database = {
    heroes: [
        {
            id: 1,
            name: "Mr.Tank",
            power: "artillery blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        {
            id: 1,
            name: "Dr. Doom",
            power: "Genius-level intellect, mastery of science and sorcery",
        },
        {
            id: 2,
            name: "Joker",
            power: "Chaotic mind, expert in chemistry and engineering",
          }
    ]
}




export const getHeroes = () => {
    return database.heroes.map(hero => ({...hero}))
}

export const getVillains = () =>{
    return database.villains.map(hero =>({...hero}))

}