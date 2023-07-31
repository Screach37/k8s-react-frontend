import './App.css';
import Splash from './Components/Splash';
import Splash2 from './Components/Splash2';
import Login from './Components/Login';
import Home from './Components/Home';
import Course from './Components/Course';
import EnrollCourse from './Components/EnrollCourse';
import CourseDetail from './Components/CourseDetail';
import BuyNow from './Components/BuyNow';
import PurchaseCourse from './Components/PurchaseCourse';
import DownloadedCourse from './Components/DownloadedCourse';
import CourseHistory from './Components/CourseHistory';
import JoinLiveClass from './Components/JoinLiveClass';
import WatchRecorded from './Components/WatchRecorded';
import Quizzes from './Components/Quizzes';
import Agree from './Components/Agree';
import Cycle from './Components/Cycle';
import Question from './Components/Question';
import Submit from './Components/Submit';
import ReviewAnswer from './Components/ReviewAnswer';
import WaitingResult from './Components/WaitingResult';
import Result from "./Components/Result";
import Assignment from './Components/Assignment';
import SubmitAssignments from './Components/SubmitAssignments';
import AssignmemtDeclared from './Components/AssignmemtDeclared';
import ScoreCard from './Components/ScoreCard';
import LiveCourseDetail from './Components/LiveCourseDetail';
import BuyLiveCourse from './Components/BuyLiveCourse';
import ExamDetail from './Components/ExamDetail';
import MyExam from "./Components/MyExam";
import ExamHistory from './Components/ExamHistory';
import DetailExam from './Components/DetailExam';
import Payment from './Components/Payment';
import PaymentDetail from './Components/PaymentDetail';
import PayNow from './Components/PayNow';
import Profile from './Components/Profile';
import AskAbout from './Components/AskAbout';
import StudyMaterials from './Components/StudyMaterials';
import MaterialList from './Components/MaterialLIst';
import PdfList from './Components/PdfList';
import Chat from './Components/Chat';
import Complains from './Components/Complains';
import ComplainDetail from './Components/ComplainDetail';
import CloseComplain from './Components/CloseComplain';
import AddComplaints from './Components/AddComplaints';
import FileClose from './Components/FileClose';
import ChatHistory from './Components/ChatHistory';
import Register from './Components/Register';
import SavePassword from './Components/SavePassword';
import Forgot from './Components/Forgot';
import Otp from './Components/Otp';
import RecoverPassword from './Components/RecoverPassword';
import PasswordUpdate from './Components/PasswordUpdate';
import Notification from './Components/Notification';
import BottomSheet from './Components/BottomSheet';
import AssignmentsResult from './Components/AssignmentResult';
import AttendanceDetails from './Components/AttendanceDetails';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/Splash2" replace />} />
          <Route path="/Splash2" element={<Splash2 />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Course" element={<Course />} />
          <Route path="/EnrollCourse" element={<EnrollCourse />} />
          <Route path="/CourseDetail" element={<CourseDetail />} />
          <Route path="/BuyNow" element={<BuyNow />} />
          <Route path="/PurchaseCourse" element={<PurchaseCourse />} />
          <Route path="/DownloadedCourse" element={<DownloadedCourse />} />
          <Route path="/CourseHistory" element={<CourseHistory />} />
          <Route path="/JoinLiveClass/:id" element={<JoinLiveClass />} />
          <Route path="/WatchRecorded/:id" element={<WatchRecorded />} />
          <Route path="/Quizzes" element={<Quizzes />} />
          <Route path="/Agree/:id" element={<Agree />} />
          <Route path="/Cycle/:id" element={<Cycle />} />
          <Route path="/Question/:id" element={<Question />} />
          <Route path="/Submit" element={<Submit />} />
          <Route path="/ReviewAnswer" element={<ReviewAnswer />} />
          <Route path="/WaitingResult" element={<WaitingResult />} />
          <Route path="/Result" element={<Result />} />
          <Route path="/Assignment" element={<Assignment />} />
          <Route path="/SubmitAssignments/:id" element={<SubmitAssignments />} />
          <Route path="/AssignmemtDeclared/:id" element={<AssignmemtDeclared />} />
          <Route path="/ScoreCard" element={<ScoreCard />} />
          <Route path="/LiveCourseDetail" element={<LiveCourseDetail />} />
          <Route path="/BuyLiveCourse" element={<BuyLiveCourse />} />
          <Route path="/ExamDetail/:id" element={<ExamDetail />} />
          <Route path="/MyExam" element={<MyExam />} />
          <Route path="/ExamHistory" element={<ExamHistory />} />
          <Route path="/DetailExam/:id" element={<DetailExam />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/PaymentDetail/:id" element={<PaymentDetail />} />
          <Route path="/PayNow" element={<PayNow />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/AskAbout" element={<AskAbout />} />
          <Route path="/StudyMaterials" element={<StudyMaterials />} />
          <Route path="/MaterialList" element={<MaterialList />} />
          <Route path='/PdfList' element={<PdfList />} />
          <Route path='/Chat' element={<Chat />} />
          <Route path='/Complains' element={<Complains />} />
          <Route path='/ComplainDetail' element={<ComplainDetail />} />
          <Route path='/CloseComplain' element={<CloseComplain />} />
          <Route path='/AddComplaints' element={<AddComplaints />} />
          <Route path='/FileClose' element={<FileClose />} />
          <Route path='/ChatHistory' element={<ChatHistory />} />
          <Route path='/SavePassword' element={<SavePassword />} />
          <Route path='/Forgot' element={<Forgot />} />
          <Route path='/Otp' element={<Otp />} />
          <Route path='/RecoverPassword' element={<RecoverPassword />} />
          <Route path='/PasswordUpdate' element={<PasswordUpdate />} />
          <Route path='/Notification' element={<Notification />} />
          <Route path='/BottomSheet' element={<BottomSheet />} />
          <Route path="/AssignmentsResult/:id" element={<AssignmentsResult />} />
          <Route path='/AttendanceDetails' element={<AttendanceDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
