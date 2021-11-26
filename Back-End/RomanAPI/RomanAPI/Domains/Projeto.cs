using System;
using System.Collections.Generic;

#nullable disable

namespace RomanAPI.Domains
{
    public partial class Projeto
    {
        public int IdProjeto { get; set; }
        public byte? IdTema { get; set; }
        public short? IdUsuario { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }

        public virtual Tema IdTemaNavigation { get; set; }
        public virtual Usuario IdUsuarioNavigation { get; set; }
    }
}
