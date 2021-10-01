// 1 - importe o useDispatch
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// 3 - importe o seu thunk
import { addCommentThunk } from "../../store/modules/user/thunks";
const Display = () => {
  // 2 - atribuindo a variável
  const dispatch = useDispatch();

  const comment = useSelector((state) => state.user);

  const [message, setMessage] = useState("");

  return (
    <>
      <div>
        <input
          placeholder="Escreva seu comentário aqui"
          onChange={(e) => setMessage(e.target.value)}
        />
        {/* // 4 - dentro do seu componente faça o dispatch do thunk, passando o 
        comentário
        */}
        <button onClick={() => dispatch(addCommentThunk(message))}>
          Enviar
        </button>
        <h2>{comment.name}</h2>
        {comment.comments.map((Element, index) => (
          <div key={index}>
            <h3>{Element}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Display;
