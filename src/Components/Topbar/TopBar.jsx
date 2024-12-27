/* eslint-disable no-unused-vars */
import { Chat, Notifications, Person, Search } from '@material-ui/icons'
import './TopBar.css'
import ProfilePicture from '../../assets/person/1.jpeg'

const TopBar = () => {
  return (
    <div className='TopBarContainer'>
        <div className="TopBarLeft">
            <span className="logo">
                LamaSocial
            </span>
        </div>
        <div className="TopBarCentre">
            <div className="searchbar">
                <Search className='searchIcon'/>
                <input type="text" placeholder='Search for Posts, Videos' className='searchinput' />
            </div>
        </div>
        <div className="TopBarRight">
            <div className="topbarlinks">
                <span className="topbarlink">Homepage</span>
                <span className="topbarlink">Timeline</span>

                <div className="topbarIcons">
                    <div className="topbariconitem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>

                    <div className="topbariconitem">
                        <Chat/>
                        <span className="topbarIconBadge">1</span>
                    </div>

                    <div className="topbariconitem">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src={ProfilePicture} alt="" className="topbarImg" />
            </div>
        </div>

    </div>
  )
}

export default TopBar