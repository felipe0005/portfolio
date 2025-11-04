{/*import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ypngmgqblcpuqchrjftc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwbmdtZ3FibGNwdXFjaHJqZnRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY2NjQ3NDksImV4cCI6MjA3MjI0MDc0OX0.vAwEicvnHW4ZL8nrm90GuB50Qp3i0JEfQeC90btWLlk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Form() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from("usuarios")
      .insert([{ nombre, apellido }]);
    if (error) {
      setMensaje("Error al guardar.");
    } else {
      setMensaje("¡Guardado correctamente!");
      setNombre("");
      setApellido("");
    }
  };

  return (
    <section
      id="form"
      className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden px-6"
    >
      <div className="absolute inset-0 stars -z-10"></div>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
        Formulario
      </h2>
      <form
        className="bg-slate-800 rounded-2xl shadow-lg p-8 w-full max-w-md flex flex-col gap-6"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Nombre"
          className="p-3 rounded bg-slate-700 text-white focus:outline-none"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Apellido"
          className="p-3 rounded bg-slate-700 text-white focus:outline-none"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 rounded transition"
        >
          Guardar
        </button>
        {mensaje && <p className="text-white text-center mt-2">{mensaje}</p>}
      </form>
    </section>
  );
}
*/}