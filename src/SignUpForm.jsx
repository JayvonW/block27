const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);
export default function SignUpForm() {
  async function handleSubmit(event) {
    event.preventDefault();
    console.log("Hello 👋");
  }
  return (
  <>
    <h2>Sign Up!</h2>
    
    {

    export default function SignUpForm() } 
      const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");
      const [error, setError] = useState(null);

      async function handleSubmit(event) {
        event.preventDefault()
      }
      try {
       } catch (error) {
          setError(error.message)
        }
      

      return (
        <>
          <h2>Sign Up</h2>
          {error && <p>{error}</p>}
            
          <form onSubmit={handleSubmit}>
            setToken(result.token);    
            <label>
              Username:           
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />       
            </label>
                
            <label>
              Password:           
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />        
            </label>
            <button>Submit</button>
              
          </form>
          
        </>
  );
            
      <form>
      <label>
        Username: <input />
      </label>
      <label>
        Password: <input />
      </label>
      <button>Submit</button>
    </form>
    <input value={username} onChange={(e) => setUsername(e.target.value)} />
    <form onSubmit={handleSubmit}>
      (//Your Form Code)
    </form>
    const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup");
    const result = await response.json();
    console.log(result);
  </>
)}