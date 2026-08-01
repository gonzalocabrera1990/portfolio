import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

/**
 * Paleta de colores aplicada (como referencia para personalización):
 * Fondo: #0d0d1a (Negro muy azulado)
 * Contenedor principal: #1a1b3a / rgba(26, 27, 58, 0.8)
 * Detalles y Acentos (Violeta): #7c4dff, #6236df (hover)
 * Éxito / Estado (Verde): #00e676
 * Texto Principal: #ffffff
 * Texto Secundario (Grisáceo): #b0bec5
 */

export const ContactEmail = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  // Estado para mensajes de estado con tipo para el color
  const [status, setStatus] = useState({
    type: '', // 'success' | 'error' | ''
    message: ''
  });
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' }); // Limpiar estado anterior

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          setLoading(false);
          setStatus({
            type: 'success',
            message: '¡Su mensaje ha sido enviado! Muchas gracias por su interés. Me pondré en contacto con usted a la brevedad.',
          });
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          setStatus({
            type: 'error',
            message: 'Ocurrió un error inesperado al enviar el mensaje. Por favor, intente de nuevo más tarde.',
          });
          console.error('Error de EmailJS:', error);
        }
      );
  };

  // Función auxiliar para obtener el color del mensaje de estado
  const getStatusColor = () => {
    if (status.type === 'success') return '#00e676'; // Verde moderno
    if (status.type === 'error') return '#ef5350'; // Rojo suave
    return '#ffffff'; // Blanco por defecto
  };

  // Estilos reutilizables para los campos de input y textarea
  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    backgroundColor: '#0a0b22', // Fondo más oscuro para el input
    color: '#ffffff',
    border: '1px solid #333366', // Borde sutil azul-violeta oscuro
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    outline: 'none',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    color: '#b0bec5', // Grisáceo suave para labels
    fontWeight: '500',
    fontSize: '0.9rem',
  };

  return (
    <div>
      <div className="project-detail-back" onClick={() => navigate(-1)}>
        <img src={'/assets/back-arrow.svg'} alt="" />
        <span>Volver</span>
      </div>
      <div style={{
        maxWidth: '600px',
        margin: '40px auto',
        padding: '2rem',
        backgroundColor: 'rgba(26, 27, 58, 0.8)', // Contenedor oscuro translúcido
        borderRadius: '20px',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5)', // Sombra para profundidad
        backdropFilter: 'blur(10px)', // Efecto glassmorphism
        border: '1px solid rgba(124, 77, 255, 0.1)', // Borde muy tenue violeta
        fontFamily: '"Poppins", "Roboto", "Helvetica Neue", sans-serif', // Fuente moderna preferida
        color: '#ffffff',
      }}>
        {/* Sección del mensaje al reclutador */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '700', color: '#7c4dff', marginBottom: '10px' }}>
            Hablemos
          </h2>
          <p style={{ color: '#ffffff', fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '480px', margin: '0 auto' }}>
            Para reclutadores y líderes de equipo: Estoy en búsqueda activa de nuevas oportunidades. Si crees que mi perfil encaja en tu empresa, por favor envíame un mensaje y concertemos una entrevista.
          </p>
        </div>

        {/* Contenedor del formulario */}
        <form ref={formRef} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label htmlFor="user_name" style={labelStyle}>Nombre Completo</label>
            <input
              id="user_name"
              type="text"
              name="user_name"
              required
              placeholder="Nombre"
              style={inputStyle}
              // Efecto hover/focus simulado (para implementación real, usar CSS externo o styled-components)
              onFocus={(e) => {
                e.target.style.borderColor = '#7c4dff';
                e.target.style.boxShadow = '0 0 8px rgba(124, 77, 255, 0.2)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#333366';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          <div>
            <label htmlFor="user_email" style={labelStyle}>Correo electrónico</label>
            <input
              id="user_email"
              type="email"
              name="user_email"
              required
              placeholder="correo@email.com"
              style={inputStyle}
              onFocus={(e) => {
                e.target.style.borderColor = '#7c4dff';
                e.target.style.boxShadow = '0 0 8px rgba(124, 77, 255, 0.2)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#333366';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          <div>
            <label htmlFor="message" style={labelStyle}>Su mensaje o propuesta</label>
            <textarea
              id="message"
              name="message"
              required
              rows="6"
              placeholder="Escriba aquí su mensaje por favor... "
              style={{ ...inputStyle, resize: 'vertical' }} // Permitir solo resize vertical
              onFocus={(e) => {
                e.target.style.borderColor = '#7c4dff';
                e.target.style.boxShadow = '0 0 8px rgba(124, 77, 255, 0.2)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#333366';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '14px 24px',
              backgroundColor: loading ? '#333366' : '#7c4dff', // Violeta principal
              color: '#ffffff',
              border: 'none',
              borderRadius: '10px',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontWeight: '600',
              fontSize: '1rem',
              letterSpacing: '0.5px',
              transition: 'background-color 0.3s, transform 0.2s',
              boxShadow: loading ? 'none' : '0 4px 14px rgba(124, 77, 255, 0.3)',
            }}
            // Efecto hover/active simulado
            onMouseOver={(e) => { if (!loading) e.target.style.backgroundColor = '#6236df'; }}
            onMouseOut={(e) => { if (!loading) e.target.style.backgroundColor = '#7c4dff'; }}
            onMouseDown={(e) => { if (!loading) e.target.style.transform = 'scale(0.98)'; }}
            onMouseUp={(e) => { if (!loading) e.target.style.transform = 'scale(1)'; }}
          >
            {loading ? 'Enviando propuesta...' : 'Enviar mensaje'}
          </button>
        </form>

        {/* Notificación de estado (Éxito o Error) */}
        {status.message && (
          <div style={{
            marginTop: '25px',
            padding: '15px',
            borderRadius: '10px',
            backgroundColor: 'rgba(0, 0, 0, 0.2)', // Fondo muy oscuro tenue para el mensaje
            borderLeft: `4px solid ${getStatusColor()}`, // Borde izquierdo de color para destacar
            color: getStatusColor(),
            fontSize: '0.95rem',
            lineHeight: '1.4',
            textAlign: 'center',
          }}>
            {status.message}
          </div>
        )}
      </div>
    </div>
  );
};