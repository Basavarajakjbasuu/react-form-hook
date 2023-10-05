import YoutubeForm from "./components/youtube-form";
import ZodForm from "./components/zod-yt-form";

const App = () => {
  return ( 
    <div className="bg-black text-white grid grid-cols-2">
      <YoutubeForm />
      <ZodForm />
    </div>
  );
}
 
export default App;