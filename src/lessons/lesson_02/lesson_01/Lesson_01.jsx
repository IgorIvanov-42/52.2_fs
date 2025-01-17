import reactImg from '../assets/react.svg'

function Lesson_01() {
  return (
    <div>
      <h2>Hello, React ⚡</h2>
      <img src={reactImg} width={100}  alt="react-img" />
      <p>
        React — это JavaScript-библиотека для разработки пользовательского
        интерфейса. React используют для создания одностраничных и
        многостраничных приложений, разработки крупных сайтов.
      </p>
    </div>
  );
}

export default Lesson_01;