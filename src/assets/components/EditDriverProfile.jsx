import React, { useState } from 'react';

const EditDriverProfile = ({ ride, onSave }) => {
  const [form, setForm] = useState(ride);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem('driverRide', JSON.stringify(form));
    onSave(form);
  };

  return (
    <div>
      <h2>Edit Ride</h2>
      <input name="name" value={form.name}  />
      <input name="car" value={form.car}  />
      <input name="time" value={form.time}  />
      <input name="source" value={form.source}  />
      <input name="destination" value={form.destination}  />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditDriverProfile;














// import React, { useState } from 'react';

// const EditDriverProfile = ({ profile, onSave }) => {
//   const [editMode, setEditMode] = useState(false);
//   const [formData, setFormData] = useState(profile);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSave = () => {
//     onSave(formData);
//     setEditMode(false);
//   };

//   return (
//     <div style={{ marginTop: '20px' }}>
//       <h2>Driver Profile</h2>
//       {editMode ? (
//         <>
//           <input name="name" value={formData.name} onChange={handleChange} />
//           <input name="car" value={formData.car} onChange={handleChange} />
//           <input name="time" value={formData.time} onChange={handleChange} />
//           <input name="phone" value={formData.phone} onChange={handleChange} />
//           <button onClick={handleSave}>Save</button>
//         </>
//       ) : (
//         <>
//           <p>Name: {profile.name}</p>
//           <p>Car: {profile.car}</p>
//           <p>Time: {profile.time}</p>
//           <p>Phone: {profile.phone}</p>
//           <button onClick={() => setEditMode(true)}>Edit Profile</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default EditDriverProfile;