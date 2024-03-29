import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Switch, Route} from 'react-router-dom';
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda} from '@syncfusion/ej2-react-schedule'


class AdminUsernamePostRoutes extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
    }
    render() {
        return (
            <Switch>
                <Route 
                    exact
                    path={this.props.match.url}
                    render={() => <div>Admin posts</div>}
                />
                <Route 
                    path={`${this.props.match.url}/create`}
                    render={() => 
                        <ScheduleComponent>
                            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
                        </ScheduleComponent>
                    }
                />
                <Route
                    exact
                    path={`${this.props.match.url}/:post_id`}
                    render={() => <div>Admin view page</div>}
                />
                <Route 
                    path={`${this.props.match.url}/:post_id/edit`}
                    render={() => <div>Admin edit page</div>}
                />
            </Switch>
        )
    }
}

export default AdminUsernamePostRoutes