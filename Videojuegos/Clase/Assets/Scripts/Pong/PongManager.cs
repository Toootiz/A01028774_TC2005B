/*
Game manager for the pongh demo 

Gabriel Muñoz Luna A01028774
2024-04-10
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
// Necessary to display text in the UI
using TMPro;

public class PongManager : MonoBehaviour
{
    [SerializeField] GameObject ball;
    [SerializeField] GameObject ballPrefab;
    [SerializeField] float speed;

    [SerializeField] TMP_Text scoreLeft;
    [SerializeField] TMP_Text scoreRight;

    public int pointsLeft = 0;
    public int pointsRight = 0;

    // Start is called before the first frame update
    void Start()
    {
        InitGame();
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.R))
        {
            if (Input.GetKeyDown(KeyCode.R)){
                Reset();
            }
        }
    }
    
    void InitGame()
    {
        StartCoroutine(ServeBall());
    }

    IEnumerator ServeBall()
    {
        yield return new WaitForSeconds(1.0f);
        ball = Instantiate(ballPrefab);
        ball.GetComponent<Rigidbody2D>().velocity = Random.insideUnitCircle.normalized * speed;
    }

    public void Score(string side){
        if (side == "left"){
            pointsLeft++;
            scoreLeft.text = pointsLeft.ToString();

            InitGame();
        }else if (side == "right") {
            pointsRight++;
            scoreRight.text = pointsRight.ToString();
            InitGame();

        }
    }

    public void Reset(){

        if (ball != null){
            Destroy(ball);
            InitGame();
        }
       
    }
}