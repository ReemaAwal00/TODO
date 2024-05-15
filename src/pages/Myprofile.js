import Secondimage from "../images/Secondimage";

const Myprofile = () =>{
    return (
        <div className="profile-container">
      <h2>My Profile</h2>
      <div className="profile-details">
        <div className="profile-picture">
         <Secondimage/>
        </div>
        <div className="profile-info">
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> johndoe@example.com</p>
          <p><strong>Location:</strong> New York, USA</p>
          <p><strong>Interests:</strong> Reading, Traveling, Cooking</p>
        </div>
      </div>
    </div>
    );
}
export default Myprofile;