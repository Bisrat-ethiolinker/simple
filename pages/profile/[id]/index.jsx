import { useRouter } from 'next/router'

const users = [
    {
        id: 1,
        email: 'feven@ethiolinker.com',
        password: 'feven123',
    },
    {
        id: 2,
        email: 'natnael@ethiolinker.com',
        password: 'natnael123',
    }
];

const Profile = () => {
    const router = useRouter()
    const { id } = router.query
    const user = users.find(user => user.id === Number(id))

  return (
        user ?
        <>
        <h4> This user id is {id} </h4>
        <h2>{user.email}</h2>
        </>
        : <h2>{"Couldn't find your request!"}</h2>
  )
}

export default Profile