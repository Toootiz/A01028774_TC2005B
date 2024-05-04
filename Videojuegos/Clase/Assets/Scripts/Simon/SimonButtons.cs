using System.Collections;
using UnityEngine;
using UnityEngine.UI;

public class SimonButton : MonoBehaviour
{
    [SerializeField] float delay;
    Color originalColor;
    AudioSource audioSource;

    // Método para inicializar el botón
    public void Init(int index)
    {
        originalColor = GetComponent<Image>().color;
        audioSource = GetComponent<AudioSource>();
        // Cargamos el clip de audio asociado al botón
        audioSource.clip = Resources.Load<AudioClip>($"Audio/{index}");
    }

    // Método para resaltar el botón y reproducir el sonido asociado
    public void Highlight()
    {
        // Reproducimos el sonido asociado al botón
        audioSource.Play();
        // Cambiamos temporalmente el color del botón
        StartCoroutine(ChangeColor());
    }

    // Corutina para cambiar el color del botón temporalmente
    IEnumerator ChangeColor()
    {
        // Cambiamos el color a negro para resaltar
        GetComponent<Image>().color = Color.black;
        // Esperamos un momento antes de restaurar el color original
        yield return new WaitForSeconds(delay);
        // Restauramos el color original del botón
        GetComponent<Image>().color = originalColor;
    }

    // Método para restablecer el color original del botón
    public void ResetColor()
    {
        GetComponent<Image>().color = originalColor;
    }
}
