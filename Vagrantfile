Vagrant.configure("2") do |config|
  config.vm.define "boot2dockerVagrant"
  config.vm.box = "yungsang/boot2docker"


  #My theme
  config.vm.synced_folder "~/WebstormProjects/koken" , "/data/koken"     


  #Forwarding Koken
  config.vm.network :forwarded_port, guest: 80, host: 8080

  #sudo chmod 777 ~/data/koken/www/storage/themes/

end
