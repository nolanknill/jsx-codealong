import './App.scss';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <section className="student-list">
        <div className="student">
          <div className="student__content">
            <img
              className="student__image"
              src="https://img.icons8.com/ios/100/000000/test-account.png"
              alt="Test Student Account Image" />
          </div>
          <h4 className="student__title">Student Name</h4>
        </div>
        <div className="student">
          <div className="student__content">
            <img
              className="student__image"
              src="https://img.icons8.com/ios/100/000000/test-account.png"
              alt="Test Student Account Image" />
          </div>
          <h4 className="student__title">Student Name</h4>
        </div>
        <div className="student">
          <div className="student__content">
            <img
              className="student__image"
              src="https://img.icons8.com/ios/100/000000/test-account.png"
              alt="Test Student Account Image" />
          </div>
          <h4 className="student__title">Student Name</h4>
        </div>
      </section>
    </>
  );
}

export default App;
