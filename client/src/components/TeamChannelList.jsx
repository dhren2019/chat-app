import React from 'react'

import { AddChannel} from '../assets'

const TeamChannelList = ({children, error= false, loading, type}) => {

    if (error) {
        return type === 'team'? (
            <div className="team-channel-list">
                <p className="team-channel-list__message">
                    Conection error, please wait a moment and try again.
                </p>
            </div>
        ): null
    }

    if (loading) {
        return (
            <div className="team-channel-list">
                <p className="team-channel-list__message loading">
                    {type === 'team' ? 'Channels' : 'Messages'}Loading...
                </p>
            </div>
        )
    }
    return (
        <div className="team-channel-list">
            <div className="team-channel-list__header">
                <p className="team-channel-list__header__title"></p>
                    {type === 'team' ? 'Channels' : 'Direct Messages'}
            </div>
            {children}
        </div>
    )
}

export default TeamChannelList
