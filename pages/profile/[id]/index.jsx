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
    <>
        <h4> This user id is {id} </h4>
        <h2>{user ? user.email : ''}</h2>
    </>
  )
}

export default Profile