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
                                        })} (choose {this.props.wizard.proficiency_choices &&this.props.wizard.proficiency_choices[0].choose})
                                    </div>
                                </div>