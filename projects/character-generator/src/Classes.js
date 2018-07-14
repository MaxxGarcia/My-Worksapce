import React, { Component } from "react";
import { getClasses, getBarbarian, getBard, getCleric, getDruid, getFighter, getMonk, getPaladin, getRanger, getRogue, getSorcerer, getWarlock, getWizard } from './redux';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

class Classes extends Component {
    constructor() {
        super()
        this.state = {
            barbarian: {
                display: "none"
            },
            bard: {
                display: "none"
            },
            cleric: {
                display: "none"
            },
            druid: {
                display: "none"
            },
            fighter: {
                display: "none"
            },
            monk: {
                display: "none"
            },
            paladin: {
                display: "none"
            },
            ranger: {
                display: "none"
            },
            rogue: {
                display: "none"
            },
            sorcerer: {
                display: "none"
            },
            warlock: {
                display: "none"
            },
            wizard: {
                display: "none"
            },
            display: "none",
            prevClass: ''
        }
        this.statSwitch = this.statSwitch.bind(this);
        this.handleDisplay = this.handleDisplay.bind(this);
    }
    componentDidMount() {
        this.props.getClasses()
        this.props.getBarbarian()
        this.props.getBard()
        this.props.getCleric()
        this.props.getDruid()
        this.props.getFighter()
        this.props.getMonk()
        this.props.getPaladin()
        this.props.getRanger()
        this.props.getRogue()
        this.props.getSorcerer()
        this.props.getWarlock()
        this.props.getWizard()
    }
    statSwitch(ab, i) {
        let counter = 0;
        if (ab > 0) {
            counter++
            switch (i) {
                case 1:
                    return (
                        counter > 1 ? <li>Strength: ${ab}</li> : <li>Strength: ${ab}</li>
                    )
                case 2:
                    return (
                        counter > 1 ? <li>Dexterity: ${ab}</li> : <li>Dexterity: ${ab}</li>
                    )
                case 3:
                    return (
                        counter > 1 ? <li>Constitution: ${ab}</li> : <li>Constitution: ${ab}</li>
                    )
                case 4:
                    return (
                        counter > 1 ? <li>Intelligence: ${ab}</li> : <li>Intelligence: ${ab}</li>
                    )
                case 5:
                    return (
                        counter > 1 ? <li>Wisdom: ${ab}</li> : <li>Wisdom: ${ab}</li>
                    )
                case 6:
                    return (
                        counter > 1 ? <li>Charisma: ${ab}</li> : <li>Charisma: ${ab}</li>
                    )

                default:
                    break;
            }
        }
    }
    handleDisplay(e, name) {
        if (name === this.state.prevClass) {
            console.log("test1")
            this.setState(prevState => ({
                display: 'none',
                [name]: { display: 'none' },
                prevClass: ''

            }))
        } else {
            console.log('test2')
            this.setState(prevState => ({
                barbarian: {
                    display: "none"
                },
                bard: {
                    display: "none"
                },
                cleric: {
                    display: "none"
                },
                druid: {
                    display: "none"
                },
                fighter: {
                    display: "none"
                },
                monk: {
                    display: "none"
                },
                paladin: {
                    display: "none"
                },
                ranger: {
                    display: "none"
                },
                rogue: {
                    display: "none"
                },
                sorcerer: {
                    display: "none"
                },
                warlock: {
                    display: "none"
                },
                wizard: {
                    display: "none"
                },
                display: "none",
                prevClass: ''

            }))
            this.setState(prevState => ({
                display: prevState.display === "none" ? 'block' : 'none',
                [name]: { display: prevState.display === "none" ? "block" : 'none' },
                prevClass: name

            }))
        }
        console.log((name), this.state.prevClass)
    }
    render() {
        return (
            <section className="contentWrapper">
                <div className="classWrapper">
                    <h1 className="classTitle">Select A Class For More Info</h1>
                    <div className="classTable">
                        <div className="classBlock">
                            <img className={"classImage"} onClick={(e) => this.handleDisplay(e, "barbarian")} src={"http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80072&d=1484611251"} alt="" />
                            <div className="className">
                                {this.props.classes.results ? this.props.classes.results[0].name : null}
                            </div>
                        </div>
                        <div className="descriptiveBlock" style={this.state.barbarian}>
                            <div className="descriptionName">
                                {this.props.barbarian && this.props.barbarian.name}
                            </div>
                            <div className="hitDie">
                                Hit Dice: {this.props.barbarian && this.props.barbarian.hit_die}
                            </div>
                            <div>
                                Proficiencies: {this.props.barbarian.proficiencies && this.props.barbarian.proficiencies.map((prof, i) => {
                                    if (i < this.props.barbarian.proficiencies.length) return `${prof.name}, `
                                    return `${prof.name}`
                                })}
                            </div>
                            <div>
                                SavingThrows: {this.props.barbarian.saving_throws && this.props.barbarian.saving_throws.map((save, i) => {
                                    if (i < this.props.barbarian.saving_throws.length - 1) return `${save.name}, `
                                    return `${save.name}`
                                })}
                            </div>
                            <div>
                                Proficiency Choices:  {this.props.barbarian.proficiency_choices && this.props.barbarian.proficiency_choices[0].from.map((prof, i) => {
                                    if (i < this.props.barbarian.proficiency_choices[0].from) return `${prof.name}, `
                                    return `${prof.name}`
                                })} (choose {this.props.barbarian.proficiency_choices && this.props.barbarian.proficiency_choices[0].choose})
                                    </div>
                        </div>
                        <div className="classBlock">
                            <img onClick={(e) => this.handleDisplay(e, "bard")} className={"classImage"} src="http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80073&d=1484611251" alt="" />
                            <div className="className">
                                {this.props.classes.results ? this.props.classes.results[1].name : null}
                            </div>
                        </div>
                        <div className="descriptiveBlock" style={this.state.bard}>
                            <div className="descriptionName">
                                {this.props.bard && this.props.bard.name}
                            </div>
                            <div className="hitDie">
                                Hit Dice: {this.props.bard && this.props.bard.hit_die}
                            </div>
                            <div>
                                Proficiencies: {this.props.bard.proficiencies && this.props.bard.proficiencies.map((prof, i) => {
                                    if (i < this.props.bard.proficiencies.length) return `${prof.name}, `
                                    return `${prof.name}`
                                })}
                            </div>
                            <div>
                                SavingThrows: {this.props.bard.saving_throws && this.props.bard.saving_throws.map((save, i) => {
                                    if (i < this.props.bard.saving_throws.length - 1) return `${save.name}, `
                                    return `${save.name}`
                                })}
                            </div>
                            <div>
                                Proficiency Choices:  {this.props.bard.proficiency_choices && this.props.bard.proficiency_choices[0].from.map((prof, i) => {
                                    if (i < this.props.bard.proficiency_choices[0].from) return `${prof.name}, `
                                    return `${prof.name}`
                                })} (choose {this.props.bard.proficiency_choices && this.props.bard.proficiency_choices[0].choose})
                                    </div>
                        </div>
                        <div className="classBlock">
                            <img onClick={(e) => this.handleDisplay(e, "cleric")} className={"classImage"} src="http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80074&d=1484611251" alt="" />
                            <div className="className">
                                {this.props.classes.results ? this.props.classes.results[2].name : null}
                            </div>
                        </div>
                        <div className="descriptiveBlock" style={this.state.cleric}>
                            <div className="descriptionName">
                                {this.props.cleric && this.props.cleric.name}
                            </div>
                            <div className="hitDie">
                                Hit Dice: {this.props.cleric && this.props.cleric.hit_die}
                            </div>
                            <div>
                                Proficiencies: {this.props.cleric.proficiencies && this.props.cleric.proficiencies.map((prof, i) => {
                                    if (i < this.props.cleric.proficiencies.length) return `${prof.name}, `
                                    return `${prof.name}`
                                })}
                            </div>
                            <div>
                                SavingThrows: {this.props.cleric.saving_throws && this.props.cleric.saving_throws.map((save, i) => {
                                    if (i < this.props.cleric.saving_throws.length - 1) return `${save.name}, `
                                    return `${save.name}`
                                })}
                            </div>
                            <div>
                                Proficiency Choices:  {this.props.cleric.proficiency_choices && this.props.cleric.proficiency_choices[0].from.map((prof, i) => {
                                    if (i < this.props.cleric.proficiency_choices[0].from) return `${prof.name}, `
                                    return `${prof.name}`
                                })} (choose {this.props.cleric.proficiency_choices && this.props.cleric.proficiency_choices[0].choose})
                                    </div>
                        </div>
                        <div className="classBlock">
                            <img onClick={(e) => this.handleDisplay(e, "druid")} className={"classImage"} src="http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80075&d=1484611252" alt="" />
                            <div className="className">
                                {this.props.classes.results ? this.props.classes.results[3].name : null}
                            </div>
                        </div>
                        <div className="descriptiveBlock" style={this.state.druid}>
                            <div className="descriptionName">
                                {this.props.druid && this.props.druid.name}
                            </div>
                            <div className="hitDie">
                                Hit Dice: {this.props.druid && this.props.druid.hit_die}
                            </div>
                            <div>
                                Proficiencies: {this.props.druid.proficiencies && this.props.druid.proficiencies.map((prof, i) => {
                                    if (i < this.props.druid.proficiencies.length) return `${prof.name}, `
                                    return `${prof.name}`
                                })}
                            </div>
                            <div>
                                SavingThrows: {this.props.druid.saving_throws && this.props.druid.saving_throws.map((save, i) => {
                                    if (i < this.props.druid.saving_throws.length - 1) return `${save.name}, `
                                    return `${save.name}`
                                })}
                            </div>
                            <div>
                                Proficiency Choices:  {this.props.druid.proficiency_choices && this.props.druid.proficiency_choices[0].from.map((prof, i) => {
                                    if (i < this.props.druid.proficiency_choices[0].from) return `${prof.name}, `
                                    return `${prof.name}`
                                })} (choose {this.props.druid.proficiency_choices && this.props.druid.proficiency_choices[0].choose})
                                    </div>
                        </div>
                        <div className="classBlock">
                            <img onClick={(e) => this.handleDisplay(e, "fighter")} className={"classImage"} src="http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80077&d=1484611252" alt="" />
                            <div className="className">
                                {this.props.classes.results ? this.props.classes.results[4].name : null}
                            </div>
                        </div>
                        <div className="descriptiveBlock" style={this.state.fighter}>
                            <div className="descriptionName">
                                {this.props.fighter && this.props.fighter.name}
                            </div>
                            <div className="hitDie">
                                Hit Dice: {this.props.fighter && this.props.fighter.hit_die}
                            </div>
                            <div>
                                Proficiencies: {this.props.fighter.proficiencies && this.props.fighter.proficiencies.map((prof, i) => {
                                    if (i < this.props.fighter.proficiencies.length) return `${prof.name}, `
                                    return `${prof.name}`
                                })}
                            </div>
                            <div>
                                SavingThrows: {this.props.fighter.saving_throws && this.props.fighter.saving_throws.map((save, i) => {
                                    if (i < this.props.fighter.saving_throws.length - 1) return `${save.name}, `
                                    return `${save.name}`
                                })}
                            </div>
                            <div>
                                Proficiency Choices:  {this.props.fighter.proficiency_choices && this.props.fighter.proficiency_choices[0].from.map((prof, i) => {
                                    if (i < this.props.fighter.proficiency_choices[0].from) return `${prof.name}, `
                                    return `${prof.name}`
                                })} (choose {this.props.fighter.proficiency_choices && this.props.fighter.proficiency_choices[0].choose})
                                    </div>
                        </div>
                        <div className="classBlock">
                            <img onClick={(e) => this.handleDisplay(e, "monk")} className={"classImage"} src="http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80078&d=1484611252" alt="" />
                            <div className="className">
                                {this.props.classes.results ? this.props.classes.results[5].name : null}
                            </div>
                        </div>
                        <div className="descriptiveBlock" style={this.state.monk}>
                            <div className="descriptionName">
                                {this.props.monk && this.props.monk.name}
                            </div>
                            <div className="hitDie">
                                Hit Dice: {this.props.monk && this.props.monk.hit_die}
                            </div>
                            <div>
                                Proficiencies: {this.props.monk.proficiencies && this.props.monk.proficiencies.map((prof, i) => {
                                    if (i < this.props.monk.proficiencies.length) return `${prof.name}, `
                                    return `${prof.name}`
                                })}
                            </div>
                            <div>
                                SavingThrows: {this.props.monk.saving_throws && this.props.monk.saving_throws.map((save, i) => {
                                    if (i < this.props.monk.saving_throws.length - 1) return `${save.name}, `
                                    return `${save.name}`
                                })}
                            </div>
                            <div>
                                Proficiency Choices:  {this.props.monk.proficiency_choices && this.props.monk.proficiency_choices[0].from.map((prof, i) => {
                                    if (i < this.props.monk.proficiency_choices[0].from) return `${prof.name}, `
                                    return `${prof.name}`
                                })} (choose {this.props.monk.proficiency_choices && this.props.monk.proficiency_choices[0].choose})
                                    </div>
                        </div>
                        <div className="classBlock">
                            <img onClick={(e) => this.handleDisplay(e, "paladin")} className={"classImage"} src="http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80079&d=1484611253" alt="" />
                            <div className="className">
                                {this.props.classes.results ? this.props.classes.results[6].name : null}
                            </div>
                        </div>
                        <div className="descriptiveBlock" style={this.state.paladin}>
                            <div className="descriptionName">
                                {this.props.paladin && this.props.paladin.name}
                            </div>
                            <div className="hitDie">
                                Hit Dice: {this.props.paladin && this.props.paladin.hit_die}
                            </div>
                            <div>
                                Proficiencies: {this.props.paladin.proficiencies && this.props.paladin.proficiencies.map((prof, i) => {
                                    if (i < this.props.paladin.proficiencies.length) return `${prof.name}, `
                                    return `${prof.name}`
                                })}
                            </div>
                            <div>
                                SavingThrows: {this.props.paladin.saving_throws && this.props.paladin.saving_throws.map((save, i) => {
                                    if (i < this.props.paladin.saving_throws.length - 1) return `${save.name}, `
                                    return `${save.name}`
                                })}
                            </div>
                            <div>
                                Proficiency Choices:  {this.props.paladin.proficiency_choices && this.props.paladin.proficiency_choices[0].from.map((prof, i) => {
                                    if (i < this.props.paladin.proficiency_choices[0].from) return `${prof.name}, `
                                    return `${prof.name}`
                                })} (choose {this.props.paladin.proficiency_choices && this.props.paladin.proficiency_choices[0].choose})
                                    </div>
                        </div>
                        <div className="classBlock">
                            <img onClick={(e) => this.handleDisplay(e, "ranger")} className={"classImage"} src="http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80080&d=1484611253" alt="" />
                            <div className="className">
                                {this.props.classes.results ? this.props.classes.results[7].name : null}
                            </div>
                        </div>
                        <div className="descriptiveBlock" style={this.state.ranger}>
                            <div className="descriptionName">
                                {this.props.ranger && this.props.ranger.name}
                            </div>
                            <div className="hitDie">
                                Hit Dice: {this.props.ranger && this.props.ranger.hit_die}
                            </div>
                            <div>
                                Proficiencies: {this.props.ranger.proficiencies && this.props.ranger.proficiencies.map((prof, i) => {
                                    if (i < this.props.ranger.proficiencies.length) return `${prof.name}, `
                                    return `${prof.name}`
                                })}
                            </div>
                            <div>
                                SavingThrows: {this.props.ranger.saving_throws && this.props.ranger.saving_throws.map((save, i) => {
                                    if (i < this.props.ranger.saving_throws.length - 1) return `${save.name}, `
                                    return `${save.name}`
                                })}
                            </div>
                            <div>
                                Proficiency Choices:  {this.props.ranger.proficiency_choices && this.props.ranger.proficiency_choices[0].from.map((prof, i) => {
                                    if (i < this.props.ranger.proficiency_choices[0].from) return `${prof.name}, `
                                    return `${prof.name}`
                                })} (choose {this.props.ranger.proficiency_choices && this.props.ranger.proficiency_choices[0].choose})
                                    </div>
                        </div>
                        <div className="classBlock">
                            <img onClick={(e) => this.handleDisplay(e, "rogue")} className={"classImage"} src="http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80081&d=1484611254" alt="" />
                            <div className="className">
                                {this.props.classes.results ? this.props.classes.results[8].name : null}
                            </div>
                        </div>
                        <div className="descriptiveBlock" style={this.state.rogue}>
                            <div className="descriptionName">
                                {this.props.rogue && this.props.rogue.name}
                            </div>
                            <div className="hitDie">
                                Hit Dice: {this.props.rogue && this.props.rogue.hit_die}
                            </div>
                            <div>
                                Proficiencies: {this.props.rogue.proficiencies && this.props.rogue.proficiencies.map((prof, i) => {
                                    if (i < this.props.rogue.proficiencies.length) return `${prof.name}, `
                                    return `${prof.name}`
                                })}
                            </div>
                            <div>
                                SavingThrows: {this.props.rogue.saving_throws && this.props.rogue.saving_throws.map((save, i) => {
                                    if (i < this.props.rogue.saving_throws.length - 1) return `${save.name}, `
                                    return `${save.name}`
                                })}
                            </div>
                            <div>
                                Proficiency Choices:  {this.props.rogue.proficiency_choices && this.props.rogue.proficiency_choices[0].from.map((prof, i) => {
                                    if (i < this.props.rogue.proficiency_choices[0].from) return `${prof.name}, `
                                    return `${prof.name}`
                                })} (choose {this.props.rogue.proficiency_choices && this.props.rogue.proficiency_choices[0].choose})
                                    </div>
                        </div>
                        <div className="classBlock">
                            <img onClick={(e) => this.handleDisplay(e, "sorcerer")} className={"classImage"} src="http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80076&d=1484611252" alt="" />
                            <div className="className">
                                {this.props.classes.results ? this.props.classes.results[9].name : null}
                            </div>
                        </div>
                        <div className="descriptiveBlock" style={this.state.sorcerer}>
                            <div className="descriptionName">
                                {this.props.sorcerer && this.props.sorcerer.name}
                            </div>
                            <div className="hitDie">
                                Hit Dice: {this.props.sorcerer && this.props.sorcerer.hit_die}
                            </div>
                            <div>
                                Proficiencies: {this.props.sorcerer.proficiencies && this.props.sorcerer.proficiencies.map((prof, i) => {
                                    if (i < this.props.sorcerer.proficiencies.length) return `${prof.name}, `
                                    return `${prof.name}`
                                })}
                            </div>
                            <div>
                                SavingThrows: {this.props.sorcerer.saving_throws && this.props.sorcerer.saving_throws.map((save, i) => {
                                    if (i < this.props.sorcerer.saving_throws.length - 1) return `${save.name}, `
                                    return `${save.name}`
                                })}
                            </div>
                            <div>
                                Proficiency Choices:  {this.props.sorcerer.proficiency_choices && this.props.sorcerer.proficiency_choices[0].from.map((prof, i) => {
                                    if (i < this.props.sorcerer.proficiency_choices[0].from) return `${prof.name}, `
                                    return `${prof.name}`
                                })} (choose {this.props.sorcerer.proficiency_choices && this.props.sorcerer.proficiency_choices[0].choose})
                                    </div>
                        </div>
                        <div className="classBlock">
                            <img onClick={(e) => this.handleDisplay(e, "warlock")} className={"classImage"} src="http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80083&d=1484611255" alt="" />
                            <div className="className">
                                {this.props.classes.results ? this.props.classes.results[10].name : null}
                            </div>
                        </div>
                        <div className="descriptiveBlock" style={this.state.warlock}>
                            <div className="descriptionName">
                                {this.props.warlock && this.props.warlock.name}
                            </div>
                            <div className="hitDie">
                                Hit Dice: {this.props.warlock && this.props.warlock.hit_die}
                            </div>
                            <div>
                                Proficiencies: {this.props.warlock.proficiencies && this.props.warlock.proficiencies.map((prof, i) => {
                                    if (i < this.props.warlock.proficiencies.length) return `${prof.name}, `
                                    return `${prof.name}`
                                })}
                            </div>
                            <div>
                                SavingThrows: {this.props.warlock.saving_throws && this.props.warlock.saving_throws.map((save, i) => {
                                    if (i < this.props.warlock.saving_throws.length - 1) return `${save.name}, `
                                    return `${save.name}`
                                })}
                            </div>
                            <div>
                                Proficiency Choices:  {this.props.warlock.proficiency_choices && this.props.warlock.proficiency_choices[0].from.map((prof, i) => {
                                    if (i < this.props.warlock.proficiency_choices[0].from) return `${prof.name}, `
                                    return `${prof.name}`
                                })} (choose {this.props.warlock.proficiency_choices && this.props.warlock.proficiency_choices[0].choose})
                                    </div>
                        </div>
                        <div className="classBlock">
                            <img onClick={(e) => this.handleDisplay(e, "wizard")} className={"classImage"} src="http://www.enworld.org/forum/attachment.php?s=be499e4e9a23b3b35cb602cea96ab273&attachmentid=80084&d=1484611255" alt="" />
                            <div className="className">
                                {this.props.classes.results ? this.props.classes.results[11].name : null}
                            </div>
                        </div>
                        <div className="descriptiveBlock" style={this.state.wizard}>
                            <div className="descriptionName">
                                {this.props.wizard && this.props.wizard.name}
                            </div>
                            <div className="hitDie">
                                Hit Dice: {this.props.wizard && this.props.wizard.hit_die}
                            </div>
                            <div>
                                Proficiencies: {this.props.wizard.proficiencies && this.props.wizard.proficiencies.map((prof, i) => {
                                    if (i < this.props.wizard.proficiencies.length) return `${prof.name}, `
                                    return `${prof.name}`
                                })}
                            </div>
                            <div>
                                SavingThrows: {this.props.wizard.saving_throws && this.props.wizard.saving_throws.map((save, i) => {
                                    if (i < this.props.wizard.saving_throws.length - 1) return `${save.name}, `
                                    return `${save.name}`
                                })}
                            </div>
                            <div>
                                Proficiency Choices:  {this.props.wizard.proficiency_choices && this.props.wizard.proficiency_choices[0].from.map((prof, i) => {
                                    if (i < this.props.wizard.proficiency_choices[0].from) return `${prof.name}, `
                                    return `${prof.name}`
                                })} (choose {this.props.wizard.proficiency_choices && this.props.wizard.proficiency_choices[0].choose})
                                    </div>
                        </div>
                    </div>
                </div >
            </section >
        )
    }
}
export default withRouter(connect(state => state, { getClasses, getBarbarian, getBard, getCleric, getDruid, getFighter, getMonk, getPaladin, getRanger, getRogue, getSorcerer, getWarlock, getWizard })(Classes));

