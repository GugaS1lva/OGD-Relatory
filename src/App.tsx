import { prompts } from "./data/data"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./components/ui/alert-dialog"

function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 text-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">Prompts do GPT</h1>

      {prompts.map((prompt) => (
        <AlertDialog key={prompt.id}>
          <AlertDialogTrigger>Aqui seria o titulo 01</AlertDialogTrigger>

          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Aqui seria o titulo 02</AlertDialogTitle>
              <AlertDialogDescription>
                {prompt.description}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <div className="prose">
              <p>{prompt.content}</p>
            </div>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      ))}
    </div>
  );
}

export default App
