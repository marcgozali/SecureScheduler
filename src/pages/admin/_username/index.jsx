import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Heading, Button, Card, Content, Columns} from 'react-bulma-components'
import {withRouter} from 'react-router-dom'

class AdminUsername extends Component {
    static propTypes = {
        user: PropTypes.string.isRequired
    }

    navigateToCreateCalendar = () => {
        const {history, username} = this.props
        history.push(`/admin/${username}/posts/create`)
    }

    render() {
        const { username } = this.props
        return (
            <div className="admin-username">
                <Card>
                    <Card.Content>
                        <Content>
                            <Heading renderAs="h2"> Hello {username} </Heading>
                            <Button color="primary" onClick={this.navigateToCreateCalendar}>
                                Create Calendar
                            </Button>
                        </Content>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}

export default withRouter(AdminUsername)