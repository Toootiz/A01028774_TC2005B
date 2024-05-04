using System.Collections;
using UnityEngine;
using TMPro;
using UnityEngine.SceneManagement;

public class Perder : MonoBehaviour
{
    [SerializeField] TextMeshProUGUI Puntaje;
    [SerializeField] TextMeshProUGUI Maximo;

    void Start() {
        int lastScore = PlayerPrefs.GetInt("UltimoPuntaje", 0);  // Obtiene el último puntaje guardado
        int highScore = PlayerPrefs.GetInt("HighScore", 0);
        Puntaje.text = $"Puntaje: {lastScore}";
        Maximo.text = $"Maximo Puntaje: {highScore}";

        StartCoroutine(WaitAndResetGame());  // Inicia la corutina que resetea el juego después de dos segundos
    }

    private IEnumerator WaitAndResetGame() {
        yield return new WaitForSeconds(2);  // Espera dos segundos
        SceneManager.LoadScene("Simon");  // Carga la escena "Simon"
    }
}
