podTemplate(yaml: """
apiVersion: v1
kind: Pod
metadata:
  labels:
    name: jenkins-slave
spec:
  containers:
  - name: jenkins-slave
    image: mshaibek/jenkins-slave-312
    command:
    - cat
    tty: true
    env:
    - name: DOCKER_HOST
      value 'tcp://localhos:2375'
  - name: dind_daemon
    image: 'docker:18-dind'
    command:
    - dockerd-entrypoint.sh
    tty: true
    securityContext:
      priviligied: true
"""
) {
    node(POD_LABEL) {
      checkout_scm
      properties([
        pipelineTriggers([
          [$class: 'GitHubPushTrigger'],
          pollSCM('*/1 * * * *')
        ])
      ])
      container('jenkins-slave') {
        sh: '''
        make deploy
        '''
      }
    }
}