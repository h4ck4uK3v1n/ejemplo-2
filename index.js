// write a function to fetch the data from the API placeholder
// and return the data in the format of an array of objects
// where each object is a user
// each user should have the following keys:
// id, name, username, email, address, phone, website, company
// address should have the following keys:
// street, suite, city, zipcode, geo
// geo should have the following keys:
// lat, lng
// company should have the following keys:
// name, catchPhrase, bs

const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    const users = data.map(user => {
        return {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            address: {
                street: user.address.street,
                suite: user.address.suite,
                city: user.address.city,
                zipcode: user.address.zipcode,
                geo: {
                    lat: user.address.geo.lat,
                    lng: user.address.geo.lng
                }
            },
            phone: user.phone,
            website: user.website,
            company: {
                name: user.company.name,
                catchPhrase: user.company.catchPhrase,
                bs: user.company.bs
            }
        }
    });
    const createDiv = document.createElement('div');

    users.forEach(user => {
        return createDiv.innerHTML += `<div>
            <h2>${user.name}</h2>
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> ${user.website}</p>
            <p><strong>Company:</strong> ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}</p>
            <hr>
        </div>`;
    })
    document.body.appendChild(createDiv);
}