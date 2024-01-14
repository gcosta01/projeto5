import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Contato from "../../models/contato";

type contatoState = {
  contatos: Contato[];
};

const initialState: contatoState = {
  contatos: [
    {
      nome: "Gabriel",
      telefone: "(12) 12345-5678",
      email: "Gabriel@gmail.com",
      id: 0,
    },
    {
      nome: "Lucas",
      telefone: "(12) 12245-5678",
      email: "lucas@gmail.com",
      id: 1,
    },
    {
      nome: "Luiza",
      telefone: "(12) 12335-5678",
      email: "luh@gmail.com",
      id: 2,
    },
    {
      nome: "Thiago",
      telefone: "(12) 12344-5678",
      email: "thih@gmail.com",
      id: 3,
    },
    {
      nome: "Leticia",
      telefone: "(12) 12355-5678",
      email: "leth@gmail.com",
      id: 4,
    },
    {
      nome: "Gulherme",
      telefone: "(12) 12345-6678",
      email: "guih@gmail.com",
      id: 5,
    },
  ],
};

const contatoSlice = createSlice({
  name: "contato",
  initialState,
  reducers: {
    editar: (state, action: PayloadAction<Contato>) => {
      const index = state.contatos.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index >= 0) {
        state.contatos[index] = action.payload;
      }
    },
    excluir: (state, action: PayloadAction<number>) => {
      state.contatos = state.contatos.filter(
        (item) => item.id !== action.payload
      );
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, "id">>) => {
      const contatoJaExiste = state.contatos.find(
        (item) => item.telefone === action.payload.telefone
      );

      if (contatoJaExiste) {
        alert("O telefone informado já existe na lista de contato.");
      } else {
        const ultimoContato = state.contatos[state.contatos.length - 1];
        const novoContato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1,
        };
        state.contatos.push(novoContato);
      }
    },
  },
});

export const { editar, excluir, cadastrar } = contatoSlice.actions;
export default contatoSlice.reducer;
