import React from 'react'
import './newUser.css'

export default function NewUser() {
    return (
        <div className='newUser'>
            <h1 className='newUserTitle'>New User</h1>
            <form className='newUserForm'>
                <div className='newUserItem'>
                    <label>Username</label>
                    <input type="text" placeholder='novi'></input>
                </div>
                <div className='newUserItem'>
                    <label>Fullname</label>
                    <input type="text" placeholder='jeremia'></input>
                </div>
                <div className='newUserItem'>
                    <label>Email</label>
                    <input type="email" placeholder='novigtm@gmail.com'></input>
                </div>
                <div className='newUserItem'>
                    <label>Password</label>
                    <input type="password" placeholder='novi'></input>
                </div>
                <div className='newUserItem'>
                    <label>Phone</label>
                    <input type="text" placeholder='0821675544667'></input>
                </div>
                <div className='newUserItem'>
                    <label>Address</label>
                    <input type="text" placeholder='Dolok Sanggul'></input>
                </div>
                <div className='newUserItem'>
                    <label>Gender</label>
                    <div className='newUserGender'>
                        <input type="radio" name='gender' id='male' value="male"></input>
                        <label for="male">Male</label>
                        <input type="radio" name='gender' id='female' value="female"></input>
                        <label for="female">Female</label>
                    </div>
                </div>
                <div className='newUserItem'>
                    <label>Active</label>
                    <select className='newUserSelect' name='active' id='active'>
                        <option value="yes" >Yes</option>
                        <option value="no" >No</option>
                    </select>
                </div>
                <button className='newUserButton'>
                    Create
                </button>
            </form>
        </div>
    )
}
