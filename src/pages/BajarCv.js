import { useState } from 'react';

function BajarCv() {
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [password, setPassword] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('');

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Aquí deberías validar la contraseña.
    // Por simplicidad, compararemos dos contraseñas y permitiremos dos formatos.
    const password1 = 'abcd'; // wampia
    const password2 = 'a123'; // cajibio

    if ((password === password1 || password === password2) && selectedFormat) {
      const baseUrl = 'https://fupedu-my.sharepoint.com/:b:/g/personal/jose_aranda_estudiante_fup_edu_co/';

      if (selectedFormat === 'formato1') {
        window.location.href = `${baseUrl}EWySCUTb8M9Ov-aD5b7pssUBla11z-q2dTI-hKwHcirSKQ?e=zFadoG`;
      } else if (selectedFormat === 'formato2') {
        window.location.href = `${baseUrl}EdoFwy6h7XVFuFiahJFlYHoBj6kcGfmK8EB0figSzK_ang?e=Inn9o4`;
      }
    } else {
      alert('Contraseña incorrecta o formato no seleccionado. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
              {showPasswordForm ? (
                <form onSubmit={handlePasswordSubmit}>
                  <label>
                    Selecciona el formato:
                    <select value={selectedFormat} onChange={(e) => setSelectedFormat(e.target.value)}>
                      <option value="">Selecciona...</option>
                      <option value="formato1">Formato 1</option>
                      <option value="formato2">Formato 2</option>
                    </select>
                  </label>
                  <br></br>
                  <label>
                    Contraseña:
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </label>
                  <br></br>
                  <button type="submit" className="btn btn-outline btn-warning">
                    Descargar CV
                  </button>
                </form>
              ) : (
                <div>
                  <button onClick={() => setShowPasswordForm(true)} className="btn btn-outline btn-warning">
                    Descargar CV
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BajarCv;
