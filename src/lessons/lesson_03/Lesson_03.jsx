import UserCard from "../../components/userCard/UserCard"

function Lesson_03() {
    return (
        <div>
            <h2>React Props 👨‍👩‍👧</h2>
            <UserCard name={'Peter'} age={35}hobby={"hiking"} />
            <UserCard name={'Rosa'} age={40}hobby={"diving"} />
            <UserCard name={'Anton'} age={28}hobby={"board games"} />
        </div>
    )
}
export default Lesson_03