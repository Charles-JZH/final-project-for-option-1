# Final-project-for-option-1

## Walkthrough video: 
https://www.youtube.com/watch?v=NRrWI2Poaf4  

## Dockerhub address:
https://hub.docker.com/repository/docker/charlesjiang1997/driver  
https://hub.docker.com/repository/docker/charlesjiang1997/spark  
https://hub.docker.com/repository/docker/charlesjiang1997/hadoop  
https://hub.docker.com/repository/docker/charlesjiang1997/jupyter    
https://hub.docker.com/repository/docker/charlesjiang1997/sonar  

## The way to modify IP address and port in the driver
You can modify the file in driver/src/views/Initial.vue to make it compatible with exported ports.
<img width="30%" height="30%" src="https://github.com/Charles-JZH/final-project-for-option-1/blob/main/steps/15.png"/>

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

11. Then, you can input "kubectl get pods" and "kubectl get svc" to see all pods and services.
<img width="50%" height="50%" src="https://github.com/Charles-JZH/final-project-for-option-1/blob/main/steps/14.png"/>

12. After getting all of these four external IP address, come back to the code of driver and modify the code.
<img width="30%" height="30%" src="https://github.com/Charles-JZH/final-project-for-option-1/blob/main/steps/15.png"/>

13. Then, deploy the driver to the GCP Kubernetes using the same method as before. 
<p float="left">
  <img width="30%" height="30%" src="https://github.com/Charles-JZH/final-project-for-option-1/blob/main/steps/16.png"/>
  <img width="50%" height="50%" src="https://github.com/Charles-JZH/final-project-for-option-1/blob/main/steps/17.png"/>
</p>

14. Now you can see all of the five running modules on the GCP Kubernetes.
<img width="90%" height="90%" src="https://github.com/Charles-JZH/final-project-for-option-1/blob/main/steps/18.png"/>

15. Go to the address of the driver, you can see the GUI of the whole project. Through this GUI, you can go to one of Jupyter-notebok, Spark, Hadoop, and Sonar.
<img src="https://github.com/Charles-JZH/final-project-for-option-1/blob/main/steps/19.png"/>

16. Here are Jupyter-notebok, Spark, and Soanr.
<img width="70%" height="70%" src="https://github.com/Charles-JZH/final-project-for-option-1/blob/main/steps/20.png"/>
<img width="70%" height="70%" src="https://github.com/Charles-JZH/final-project-for-option-1/blob/main/steps/21.png"/>
<img width="70%" height="70%" src="https://github.com/Charles-JZH/final-project-for-option-1/blob/main/steps/24.png"/>

17. As to the Hadoop, you can see there are two slaves running. Plus the master node, there are three running nodes totally.
<img width="80%" height="80%" src="https://github.com/Charles-JZH/final-project-for-option-1/blob/main/steps/22.png"/>
<img width="90%" height="90%" src="https://github.com/Charles-JZH/final-project-for-option-1/blob/main/steps/23.png"/>
