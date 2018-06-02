var hyrule = {
    physicalLocation: "unknown",
    timelineLocation: "hero of Time",
    heroName: "Link",
    heroeAge: 10,
    loveInterests: [
        {
            name: "Zelda",
            age: 10,
            physicalLocation: "Hyrule Castle",
            needs: ["Kokiri Emerald", "Zora Ruby", "Goron Saphire", "Master Sword"]
        },
        {
            name: "Sariah",
            age: "unknown",
            physicalLocation: "Kokiri Village",
            needs: ["friendship", "liberation"]
        },
        {
            name: "Ruto",
            age: 10,
            physicalLocation: "Inside Lord Jabu Jabu",
            needs: ["saving", "engagement", "new legs"]
        },
        {
            name: "Malon",
            age: 10,
            physicalLocation: "Lon Lon Ranch",
            needs: ["to collect milk", "sing Epona's Song", "collect Cucoo's"]
        }
    ],
    hasHorse: false,
    orcarina: {
        owned: true,
        material: "wood",
        songs: ["Sariah's Song", "Song of Time", "Zelda's Lullaby", "Song of Storms"]
    },
    ruppies: 99,
    wallet: undefined,
    sword: "Kokiri Sword",
    items: ["boomerang", "slingshot", "Deku Shield", "Deku Sticks", "Deku Nuts", "empty jar", "jar of bugs", "Keton mask"],
    timeTravel: function(){
        this.heroeAge += 7;
        for (let i = 0; i < this.loveInterests.length; i++) {
          this.loveInterests[i].age += 7;
        }
        this.loveInterests[0].physicalLocation = "Gannon's Castle";
        this.loveInterests[1].physicalLocation = "Lost Woods";
        this.loveInterests[2].physicalLocation = "Water Temple";
        this.loveInterests[3].physicalLocation = "Lon Lon Ranch";
        console.log("The Hero of Time has Awakened")
    }
}

hyrule.villages = ["Kokir Village", "Goron Village", "Castle Town", "Kakariko Village", "Garudo Village", "Zora's Domain"];
hyrule.spirtualStones = [
    {
        stoneName: "Zora Saphire",
        location: "Zora's Domain",
        held: true,
        heldBy: hyrule.loveInterests[2].name,
    },
    {
        stoneName: "Kokiri Emerald",
        location: "my inventory",
        held: true,
        heldBy: this.heroName
    },
    {
        stoneName: "Goron Ruby",
        location: "Mt. Doom",
        held: true,
        heldBy: "Darunia"
    }

]

hyrule.timeTravel();

function moreTimeTravel() {
    for (let i = 0; i < array.length; i++) {
        hyrule.loveInterests[i].needs.push("saving")
    }
    hyrule.items.push("Master Sword");
}