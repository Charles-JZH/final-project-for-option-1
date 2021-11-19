# Final-project-for-option-1

## Walkthrough video: 
https://www.youtube.com/watch?v=NRrWI2Poaf4  

## Deployment steps on GCP Kubernetes:
Below are the steps to get my application running on GCP Kubernetes.  
1. Navigate to the GCP console and select a project.
<img width="50%" height="50%" src="https://github.com/Charles-JZH/final-project-for-option-1/blob/main/steps/01.png"/>

2. After selecting the project, click the hamburger icon in the top left and navigate to "Kubernetes Engine "--> "Clusters"
<img width="30%" height="30%" src="https://github.com/Charles-JZH/final-project-for-option-1/blob/main/steps/02.png"/>

3. Then, create a standard Kubernetes cluster (choose the GKE Standard).
<img width="50%" height="50%" src="https://github.com/Charles-JZH/final-project-for-option-1/blob/main/steps/03.png"/>

4. Use the following parameters to create the cluster.
<img width="50%" height="50%" src="https://github.com/Charles-JZH/final-project-for-option-1/blob/main/steps/04.png"/>

5. After creating the cluster successfully, you can see it. Then, click on the cluster name to see the details. 
<img width="70%" height="70%" src="https://github.com/Charles-JZH/final-project-for-option-1/blob/main/steps/05.png"/>

6. Once entering the resulting page, click "Connect" in the top bar. Then, click "Run in Cloud Shell" on the popup.
<img width="50%" height="50%" src="https://github.com/Charles-JZH/final-project-for-option-1/blob/main/steps/06.png"/>

7. Then, you can operate the Cloud Shell of the cluster.
<img width="80%" height="80%" src="https://github.com/Charles-JZH/final-project-for-option-1/blob/main/steps/07.png"/>

8. Create four yaml configuration files for jupyter-notebook, hadoop, spark, and sonar respectively. The specific configuration files are in the config folders.
<p float="left">
  <img width="23%" height="23%" src="https://github.com/Charles-JZH/final-project-for-option-1/blob/main/steps/08.png"/>
  <img width="23%" height="23%" src="https://github.com/Charles-JZH/final-project-for-option-1/blob/main/steps/09.png"/>
  <img width="23%" height="23%" src="https://github.com/Charles-JZH/final-project-for-option-1/blob/main/steps/10.png"/>
  <img width="23%" height="23%" src="https://github.com/Charles-JZH/final-project-for-option-1/blob/main/steps/11.png"/>
</p>

9. After creating all of these yaml configuration files, apply them on the Kubernetes using "kunectl apply -f $config_name.yaml"
<img width="50%" height="50%" src="https://github.com/Charles-JZH/final-project-for-option-1/blob/main/steps/12.png"/>

10. As to the hadoop, once you run it in a Pod, you have to enter in that pod using "kubectl exec -it --namespace=default $pod_name -- sh". Then, you should run the run.sh script using "sh run.sh". After that, you will get into the console of the master node (namely the namenode in Hadoop). You should input "./start-hadoop.sh" to start the master node. After finish doing these steps, you can exit and come back to the Cloud Shell.
<img width="70%" height="70%" src="https://github.com/Charles-JZH/final-project-for-option-1/blob/main/steps/13.png"/>


