using System;
using System.Collections.Generic;

#nullable disable

namespace RomanAPI.Domains
{
    public partial class Usuario
    {
        public Usuario()
        {
            Projetos = new HashSet<Projeto>();
        }

        public short IdUsuario { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }

        public virtual ICollection<Projeto> Projetos { get; set; }
    }
}
