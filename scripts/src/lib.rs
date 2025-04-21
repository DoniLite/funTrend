use std::{path::Path, process::Command};

pub fn add(left: u64, right: u64) -> u64 {
    left + right
}

pub fn build() {
    let frontend_dir = Path::new("../frontend");
    let deno_command = if cfg!(target_os = "windows") { "deno.exe" } else { "deno" };

    println!("Building frontend with Deno...");

    let status = Command::new(deno_command)
        .current_dir(frontend_dir)
        .arg("task")
        .arg("build")
        .status()
        .expect("Failed to execute Deno build task");

    if !status.success() {
        eprintln!("Error during Deno frontend build.");
        std::process::exit(1);
    }

    println!("Frontend build completed successfully.");

    // Indique à Cargo de surveiller les changements dans le dossier de sortie de Vite
    // pour déclencher une recompilation si nécessaire (pour le développement)
    println!("cargo:rerun-if-changed={}", frontend_dir.join("dist").display());
    println!("cargo:rerun-if-changed={}", frontend_dir.join("src").display());
    println!("cargo:rerun-if-changed={}", frontend_dir.join("public").display());
    println!("cargo:rerun-if-changed={}", frontend_dir.join("vite.config.js").display());
    println!("cargo:rerun-if-changed={}", frontend_dir.join("deno.json").display());
}

pub fn vite() {
    
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = add(2, 2);
        assert_eq!(result, 4);
    }
}
