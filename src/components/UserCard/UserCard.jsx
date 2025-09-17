const UserCard = ({user}) => {
  const { firstName, lastName, photoUrl, gender } = user;

  return (
    <div className="flex justify-center my-10">
        <div className="card bg-base-300 w-96 shadow-xl">
            <figure>
                <img
                src={photoUrl}
                alt="User" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{`${firstName} ${lastName}`}</h2>
                <p>{`Refer me as ${gender === 'Male' ? 'He/Him' : 'She/Her'}`}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Ignore</button>
                    <button className="btn btn-secondary">Interested</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserCard;